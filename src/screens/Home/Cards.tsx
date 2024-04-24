import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';
import { CardsComponent } from '../../components/Cards/CardsComponent';
import { gql, useQuery } from '@apollo/client';
import './Cards.css'
import { Grid, Icon } from '@mui/material';
import { SearchInput } from '../../components/SearchInput/SearchInput';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';

const COUNTRY_QUERY = gql`
  query {
    countries {
      name
      native
      capital
      emoji
      currency
      languages {
        code
        name
      }
    }
  }
    `;

export const Cards = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const cardsPerPage = 12;
    const { loading, error, data } = useQuery(COUNTRY_QUERY);

    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;

    const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
        setCurrentPage(1);
    };


    const filteredData = data?.countries?.filter((country: any) =>
        country.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const currentCards = filteredData?.slice(indexOfFirstCard, indexOfLastCard);



    const paginate = (pageNumber: any) => setCurrentPage(pageNumber);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyItems: 'center', alignItems: 'center', background: 'linear-gradient(90deg, rgba(73,101,126,1) 0%, rgba(16,19,34,1) 35%, rgba(77,48,96,1) 100%)', height: '100%' }}>
            <SearchInput value={searchQuery} onChange={(e: any) => handleSearchInputChange(e)} />
            {data !== undefined ?
                <div>
                    <Grid container spacing={1} style={{ display: 'flex', justifyContent: 'center', width: '96vw' }}>
                        {currentCards.map((item: any) => (
                            <Grid item xs={10} sm={4} md={3}>
                                <CardsComponent title={item.name} emoji={item.emoji} languages={item.languages} currency={item.currency} />
                            </Grid>
                        ))}
                    </Grid>
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', marginBottom: '20px' }}>
                        {currentPage > 1 &&
                            <div onClick={() => paginate(currentPage - 1)}
                                style={{ display: 'flex', fontSize: 11, marginLeft: 5, marginRight: 5 }}>
                                <Icon style={{ color: 'white' }}>
                                    <ArrowCircleLeftIcon />
                                </Icon>
                            </div>}

                        {Array.from({ length: Math.ceil(data.countries.length / cardsPerPage) }).map((_, index) => (
                            <button key={index} onClick={() => paginate(index + 1)} style={{ background: 'transparent', border: currentPage - 1 === index ? '2px solid white' : '1px solid grey', borderRadius: '45px', marginLeft: '8px', padding: '6px', color: 'white' }}>
                                {index + 1}
                            </button>
                        ))}
                            <div onClick={() => paginate(currentPage + 1)}
                                style={{ display: 'flex', fontSize: 11, marginLeft: 5, marginRight: 5 }}>
                                <Icon style={{ color: 'white' }}>
                                    <ArrowCircleRightIcon />
                                </Icon>
                            </div>
                    </div>
                </div>
                :
                < div > cargando </div >
            }
        </div>
    )
};
