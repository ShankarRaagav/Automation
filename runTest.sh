rm -r output
npx codeceptjs run --steps --plugins allure
allure serve output/allure-results