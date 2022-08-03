import React, { useEffect, useState, useRef, useContext } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../constants/BASE_URL';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import {
  Container,
  CategoryNavBar,
  Button,
  Category,
  ContainerLoader,
} from './style';
import CardRestaurantFeed from '../../components/CardRestaurantFeed/CardRestaurantFeed';
import CardFilterFeed from '../../components/CardFilterFeed/CardFilterFeed';
import GlobalContext from '../../context/GlobalContext';
import Header from '../../components/Header/Header';
import GoToTop from '../../components/GoToTop/GoToTop';
import LoaderCard from '../../components/LoaderCard/LoaderCard';
import FooterNavigation from '../../components/Footer/Footer';

export default function FeedPage() {
  const { states, setters } = useContext(GlobalContext);
  const [category, setCategory] = useState('');
  const categoryBar = useRef(null);
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const getRestaurants = () => {
    axios
      .get(`${BASE_URL}/restaurants`, {
        headers: {
          auth: localStorage.getItem('token'),
        },
      })
      .then((res) => {
        setters.setRestaurants(res.data.restaurants);
        setters.setLoaderCard(true);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getRestaurants();
  }, []);

  const handleLeftClick = (event) => {
    event.preventDefault();
    categoryBar.current.scrollLeft -= categoryBar.current.offsetWidth;
  };

  const handleRightClick = (event) => {
    event.preventDefault();
    categoryBar.current.scrollLeft += categoryBar.current.offsetWidth;
  };

  const categoryList = states.restaurants.map((item, index) => {
    return (
      <li key={index}>
        <Category
          selected={category === item.category}
          onClick={() => setCategory(item.category)}
        >
          {item.category}
        </Category>
      </li>
    );
  });

  return (
    <Container>
      <Header button={false} text={'Rappi4'} />

      <CategoryNavBar>
        <Button onClick={handleLeftClick}>
          <MdKeyboardArrowLeft size={'32px'} />
        </Button>
        {!states.loaderCard && (
          <ul ref={categoryBar}>
            <li>
              <Category
                selected={category === ''}
                onClick={() => setCategory('')}
              >
                Todos
              </Category>
            </li>
            {categoryList}
          </ul>
        )}
        <Button onClick={handleRightClick}>
          <MdKeyboardArrowRight size={'32px'} />
        </Button>
      </CategoryNavBar>

      {!states.loaderCard ? (
        <ContainerLoader>
          {list.map((item, index) => {
            return <LoaderCard key={index} />;
          })}
        </ContainerLoader>
      ) : category ? (
        <CardFilterFeed category={category} />
      ) : (
        <CardRestaurantFeed />
      )}
      <GoToTop />
      <FooterNavigation />
    </Container>
  );
}
