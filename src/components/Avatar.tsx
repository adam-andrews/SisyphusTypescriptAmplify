import Image from 'next/image';

interface AvatarProps {
	seed?: string;
	large?: boolean;
	size?: string | number;
}

export default function Avatar({ large, seed, size }: AvatarProps) {
	return (
		<div
			className={`relative overflow-hidden ${
				!size ? 'h-10 w-10' : `h-${size} w-${size}`
			}  ${large && 'h-20 w-20'} rounded-full border-gray-300 bg-white`}
		>
			<Image
				src={`https://avatars.dicebear.com/api/open-peeps/${
					seed || 'placeholder'
				}.svg`}
				alt="avatar img"
				layout="fill"
			/>
		</div>
	);
}
