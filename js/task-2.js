'use strict';

// ============================================== Задача 2. Склад ===============================================

class Storage {
  #items;
  constructor(itemsArray) {
    this.#items = itemsArray;
  }

  getItems() {
    return this.#items;
  }

  addItem(newItem) {
    this.#items.push(newItem);
  }

  removeItem(itemToRemove) {
    this.#items.forEach(item => {
      if (item === itemToRemove) {
        this.#items.splice(this.#items.indexOf(itemToRemove), 1);
      }
    });
  }
}

// ============================================== Перевірка =====================================================

const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem('Droid');
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem('Prolonger');
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
