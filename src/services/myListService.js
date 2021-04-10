import AsyncStorage from '@react-native-async-storage/async-storage';
import {useCallback} from 'react';

const MY_LIST = 'my-list';

export const useMyList = () => {
  const getMyList = useCallback(async () => {
    const myListData = await AsyncStorage.getItem(MY_LIST);
    return JSON.parse(myListData);
  }, []);

  const isItemInMyList = useCallback(
    async (item) => {
      const myList = await getMyList();
      return (myList || []).find(
        (itemInList) => item && itemInList.id === item.id,
      );
    },
    [getMyList],
  );

  const addItemToMyList = async (item) => {
    const myList = await getMyList();
    await AsyncStorage.setItem(
      MY_LIST,
      JSON.stringify([...(myList || []), item]),
    );
  };

  const removeItemFromMyList = async (item) => {
    const myList = await getMyList();

    const itemIndex = myList.findIndex(
      (itemInList) => itemInList.id === item.id,
    );

    if (itemIndex > -1) {
      myList.splice(itemIndex, 1);
    }

    await AsyncStorage.setItem(MY_LIST, JSON.stringify(myList));
  };

  return [getMyList, addItemToMyList, removeItemFromMyList, isItemInMyList];
};
