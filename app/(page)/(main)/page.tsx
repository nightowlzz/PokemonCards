import { SideNav } from './_components/(aside)/side-nav';
import { CardBox } from './_components/(card)/card-box';
import { MyInfo } from './_components/(myinfo)/my-info';

import { SearchCardWrap } from './_components/search-card-wrap';

const imageUrl = '/images/cat.jpg';
const cardTitle = 'FE개발자 김미소';
const cardDesc = '안녕하세요.\nFE개발자 김미소 입니다.\n별 기능은 없지만\n구경해 주세요~';

export default async function Main() {
	return (
		<>
			<section className='flex justify-between gap-20 max-w-[900px] m-auto pb-[200px]'>
				<MyInfo />
				<div className='animate-move-left'>
					<CardBox type={'create'} cardBgType={'yellow'} name={'bg'} image={imageUrl} cardTitle={cardTitle} cardDesc={cardDesc} />
				</div>
			</section>
			<SearchCardWrap />
			<SideNav />
		</>
	);
}
