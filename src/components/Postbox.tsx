import React, { cloneElement } from 'react';
import Avatar from './Avatar';
import { PhotographIcon, LinkIcon } from '@heroicons/react/solid';
import { useForm } from 'react-hook-form';
import { useUser } from '../context/AuthContext';
import { Amplify, API, graphqlOperation } from 'aws-amplify';
import { Post as PostType, CreatePostInput, ListSubredditsQuery } from '../API';
import { createPost } from '../graphql/mutations';
import { getSubreddit, subredditBySubredditName } from '../graphql/queries';
import awsExports from '../aws-exports';
Amplify.configure(awsExports);

type FormData = {
	postTitle: string;
	postBody: string;
	postImage: string;
	subreddit: string;
};

type Props = {
	subreddit?: string;
};
function PostBox({ subreddit }: Props) {
	const [imageBoxOpen, setImageBoxOpen] = React.useState<boolean>(false);

	const { user, setUser } = useUser();

	//Make Addpost refetch Posts after submitting

	const {
		register,
		setValue,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<FormData>();

	const onSubmit = handleSubmit(async (formData) => {
		console.log(formData);
		const { postTitle, postBody, postImage, subreddit } = formData;
		// Check If subreddit exists
		const subredditRequest = (await API.graphql({
			query: subredditBySubredditName,
			variables: { name: subreddit },
		})) as {
			data: any;
			errors: any[];
		};

		try {
			if (subredditRequest.data.subredditBySubredditName.items[0].name) {
				const postDetails = {
					contents: postBody,
					image: postImage,
					title: postTitle,
					subredditID:
						subredditRequest.data.subredditBySubredditName.items[0].id,
					subredditName: subreddit,
					username: user.username,
					vote: '0',
				};

				const postCreateRequest = (await API.graphql({
					query: createPost,
					variables: { input: postDetails },
				})) as {
					data: any;
					errors: any[];
				};
			}
		} catch (err) {
			console.log('subreddit not exists');
			console.log(err);
		}
		//If exists Create Post
		// const newPost = await API.graphql(
		// 	graphqlOperation(createPost, { input: formData })
		// ); // equivalent to above example
	});

	return (
		<form
			onSubmit={onSubmit}
			className="sticky top-16 z-50 border rounded-md border-gray-300 bg-white p-2"
		>
			<div className="flex items-center space-x-3">
				{/* Avatar */}
				<Avatar seed={user ? user.username : 'null'} />
				<input
					{...register('postTitle', { required: true })}
					className="flex-1 rounded-md bg-gray-50 p-2 pl-5 outline-none"
					type="text"
					placeholder="Title"
				/>
				<PhotographIcon
					onClick={() => setImageBoxOpen(!imageBoxOpen)}
					className={`h-6 cursor-pointer text-gray-300 ${
						imageBoxOpen && 'text-blue-300'
					}`}
				/>
				<LinkIcon className="h-6 text-gray-300" />
			</div>

			{!!watch('postTitle') && (
				<div className="flex flex-col py-2">
					<div className="flex items-center px-2">
						<p className="min-w-[90px]">Body:</p>
						<input
							className="m-2 flex-1 p-2 outline-none"
							{...register('postBody')}
							type="text"
							placeholder="Enter a body(Optional)"
						/>
					</div>
					{!subreddit && (
						<div className="flex items-center px-2">
							<p className="min-w-[90px]">Subreddit:</p>
							<input
								className="m-2 flex-1 p-2 outline-none"
								{...register('subreddit', { required: true })}
								type="text"
								placeholder="i.e Cats"
							/>
						</div>
					)}

					{imageBoxOpen && (
						<div className="flex items-center px-2">
							<p className="min-w-[90px]">Image:</p>
							<input
								className="m-2 flex-1 p-2 outline-none"
								{...register('postImage')}
								type="text"
								placeholder="Optional..."
							/>
						</div>
					)}

					{Object.keys(errors).length > 0 && (
						<div className="space-y-2 p-2 text-red-500">
							{errors.postTitle?.type === 'required' && (
								<p>Title is required</p>
							)}
							{errors.subreddit?.type === 'required' && (
								<p>Subreddit is required</p>
							)}
						</div>
					)}
					{!!watch('postTitle') && (
						<button
							type="submit"
							className="w-full rounded-full bg-blue-400 p-2 text-white "
						>
							Create Post
						</button>
					)}
				</div>
			)}
		</form>
	);
}

export default PostBox;
