import Link from 'next/link';
import { SignUpForm } from '../components/sign-up-form';

export default function SignUp() {
	return (
		<>
			<h1 className='text-5xl mb-10 font-bold'>Pokemon Cards</h1>
			<SignUpForm />
			<Link href='/sign-in' className='mt-4 underline'>
				로그인
			</Link>
		</>
	);
}
