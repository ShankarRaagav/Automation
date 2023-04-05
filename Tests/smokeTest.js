Feature("@first Create Todos @step:06 @smoke @story:12345");

Before(async ({ I, TodosPage }) => {
  TodosPage.goto();
});

/**
 * Happy Path tests
 */
Scenario.skip("Create a new todo item", async ({ I, TodosPage }) => {
  I.say("Given I have an empty todo list");

  I.say('When I create a todo "foo"');
  TodosPage.enterTodo("foo");

  I.say("Then I see the new todo on my list");
  TodosPage.seeNumberOfTodos(1);

  I.saveScreenshot("create-todo-item.png");
});

Scenario("Create multiple todo items", async ({ I, TodosPage }) => {
  I.say("Given I have an empty todo list");
  I.say('When I create todos "foo", "bar" and "baz"');
  TodosPage.enterTodo("foo");
  TodosPage.enterTodo("bar");
  TodosPage.enterTodo("baz");

  I.say("Then I have these 3 todos on my list");
  TodosPage.seeNumberOfTodos(3);

  I.saveScreenshot("create-multiple-todo-items.png");
});


/**
 * Edge cases
 */

const examples = new DataTable(["Todo Text", "Result"]);
examples.add(["Todo with umlauts äöü", "is in list"]);
examples.add(["Very loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong TooooooooooooooooooooooooooooooooooooooooDooooooooooooooo", "is in list"]);
examples.add(['Todo with html code <script>alert("hello")</script>', "is in list"]);

Data(examples).Scenario("Todos containing weird characters", async ({ I, current, TodosPage }) => {
  I.say("When I enter {Todo Text}");
  TodosPage.enterTodo(current["Todo Text"]);

  I.say("Then I see {Result}");
  if (current["Result"] === "is in list") {
    TodosPage.seeNthTodoEquals(1, current["Todo Text"]);
  }
});
