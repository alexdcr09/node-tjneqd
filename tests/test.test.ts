import { searchPokemon } from '../3';
import { test, expect, vi } from 'vitest';
import { useUserStore } from '../5';

test('Test', async () => {
  const { currentUser, setCurrentUser } = useUserStore.getState();

  console.log(currentUser, setCurrentUser);
});