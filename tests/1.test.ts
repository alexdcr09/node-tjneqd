import { test, expect, vi } from 'vitest';
import { filterAndSortUsers, User } from '../1';

describe('filterAndSortUsers', () => {
  it('filtre et trie correctement les utilisateurs', () => {
    const users: User[] = [
      { age: 25, name: 'Alice' },
      { age: 17, name: 'Bob' },
      { age: 30, name: 'Charlie' },
      { age: 20, name: 'Eve' },
    ];

    const filteredAndSortedUsers = filterAndSortUsers(users);

    // Vérifier si les utilisateurs de moins de 18 ans ont été filtrés
    expect(filteredAndSortedUsers.some((user) => user.age < 18)).toBe(false);

    // Vérifier si les utilisateurs sont triés par nom dans l'ordre décroissant
    for (let i = 0; i < filteredAndSortedUsers.length - 1; i++) {
      expect(
        filteredAndSortedUsers[i].name.localeCompare(
          filteredAndSortedUsers[i + 1].name
        )
      ).toBeLessThanOrEqual(0);
    }
  });
});
