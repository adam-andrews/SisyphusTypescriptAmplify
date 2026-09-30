import {
	createContext,
	Dispatch,
	ReactElement,
	SetStateAction,
	useContext,
	useEffect,
	useState,
} from 'react';
import { getCurrentUser } from 'aws-amplify/auth';
import { Hub } from 'aws-amplify/utils';

interface UserContextType {
	user: any | null;
	setUser: any;
}

const UserContext = createContext<UserContextType>({} as UserContextType);

interface Props {
	children: React.ReactElement;
}

export default function AuthContext({ children }: Props): ReactElement {
	const [user, setUser] = useState<any | null>(null);

	useEffect(() => {
		checkUser();
	}, []);

	useEffect(() => {
		const stopListening = Hub.listen('auth', () => {
			// perform some action to update state whenever an auth event is detected.
			checkUser();
		});
		return stopListening;
	}, []);

	async function checkUser() {
		try {
			// Returns { username, userId, signInDetails }
			const amplifyUser = await getCurrentUser();
			setUser(amplifyUser);
		} catch (error) {
			// No current signed in user.
			setUser(null);
		}
	}

	return (
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	);
}

export const useUser = (): UserContextType => useContext(UserContext);
