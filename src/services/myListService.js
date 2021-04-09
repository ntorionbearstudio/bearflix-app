import AsyncStorage from '@react-native-async-storage/async-storage';

const MY_LIST = 'my-list';

export const useMyList = () => {
  const getMyList = async () => {
    const myListData = await AsyncStorage.getItem(MY_LIST);
    return JSON.parse(myListData);
  };

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

    await AsyncStorage.setItem(MY_LIST, myList);
  };

  const isItemInMyList = async (item) => {
    const myList = await getMyList();
    return (myList || []).find(
      (itemInList) => item && itemInList.id === item.id,
    );
  };

  return [getMyList, addItemToMyList, removeItemFromMyList, isItemInMyList];
};
