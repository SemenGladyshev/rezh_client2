import { Container } from '@mui/material';

import NewsItem from '../components/NewsItem';

export default function News() {
    const newsMock = [
        {
            id: 1,
            title: 'Новость1',
            text: 'В свердловской области убили негра айайайай',
            img: 'src',
            createdAt: new Date()
        },
        {
            id: 2,
            title: 'Новость2',
            text: 'В свердловской области убили негра айайайай',
            img: 'src',
            createdAt: new Date()
        },
        {
            id: 3,
            title: 'Новость3',
            text: 'В свердловской области убили негра айайайай',
            img: 'src',
            createdAt: new Date()
        },
        {
            id: 4,
            title: 'Новость4',
            text: 'В свердловской области убили негра айайайай',
            img: 'src',
            createdAt: new Date()
        },
        {
            id: 5,
            title: 'Новость5',
            text: 'В свердловской области убили негра айайайай',
            img: 'src',
            createdAt: new Date()
        }
    ];

    return (
        <Container>
            {newsMock.map((newsItem) => {
                return <NewsItem {...newsItem} key={newsItem.id} />;
            })}
        </Container>
    );
}