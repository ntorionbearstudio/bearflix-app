import {useState} from 'react';

export const CATEGORIES = {
  SERIES: 'SERIES',
  MOVIES: 'MOVIES',
  MY_LIST: 'MY_LIST',
};

export const useSelectedCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return [
    {
      series: selectedCategory === CATEGORIES.SERIES,
      movies: selectedCategory === CATEGORIES.MOVIES,
      myList: selectedCategory === CATEGORIES.MY_LIST,
    },
    setSelectedCategory,
  ];
};
