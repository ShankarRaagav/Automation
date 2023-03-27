const assert = require("assert");

const I = actor();

const fkart = "//span[text() = 'login']";


module.exports = {
  goto() {
    I.amOnPage("http://omayo.blogspot.com/");  
    I.refreshPage();
    I.executeScript(() => sessionStorage.clear());
    I.executeScript(() => console.error("Boom!"));
    I.waitForVisible("span#blogsmenu");
  },

  enterTodo(todo) {
    I.fillField(".new-todo", todo);
    I.pressKey("Enter");
  },

  async value(loc,val)
  {
    I.fillField(loc,val);
  },

  markAllAsCompleted() {
    I.click('label[for="toggle-all"');
  },

  clearCompleted() {
    I.click("button.clear-completed");
  },

  filterAll() {
    I.click(locate(".filters li").at(1));
  },

  filterActive() {
    I.click(locate(".filters li").at(2));
  },

  filterCompleted() {
    I.click(locate(".filters li").at(3));
  },

  editNthTodo(nthTodo, newTodoText) {
    I.doubleClick(nthTodoItem(nthTodo));
    I.fillField(nthTodoEditField(nthTodo), newTodoText);
    I.pressKey("Enter");
  },

  deleteNthTodo(nthTodo) {
    // Use a custom helper function to hover over an todo item
    I.moveCursorTo(`.todo-list li:nth-child(${nthTodo})`);
    I.click(nthTTodoDeleteButton(nthTodo));
  },

  refresh() {
    I.refreshPage();
  },

  async seeNthTodoEquals(nthTodo, todo) {
    let todos = await I.grabTextFrom(".todo-list li");
    if (typeof todos === "string") {
      todos = [todos];
    }

    assert(todos[nthTodo - 1] === todo, `Expected "${todo}" but got "${todos[nthTodo - 1]}"`);
    return todos;
  },

  seeNumberOfTodos(numberOfTodos) {
    I.seeNumberOfVisibleElements(".todo-list li", numberOfTodos);
  },

  seeEmptyTodoInput() {
    I.seeInField(".new-todo", "");
  },

  seeFooter() {
    I.seeElement("footer.info");
  },
};
