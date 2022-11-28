from behave import given, when, then
from selenium import webdriver
from selenium.webdriver.common.by import By

## ------------------------- Public scenario methods ------------------------- ##


@when(u'I click the button "{id}"')
def step_impl(context, id):
    context.driver.find_element(By.ID, id).click()

## ------------------------- Yonus scenario methods ------------------------- ##


@given(u'that BoligExpress Homepage is shown')
def step_impl(context):
    # firefox users (has to be in host machine path directory)
    # context.driver = webdriver.Firefox()
    # chrome users (uncomment next line)
    #context.driver = webdriver.Chrome("chromedriver.exe")
    context.driver.get("http://localhost:3000/")
    status = context.driver.find_element(
        By.ID, "frontPageTitle").is_displayed()

    assert status is True


@when(u'I enter username "{user}" and password {pwd}')
def step_impl(context, user, pwd):
    context.driver.find_element(By.NAME, "first_name").send_keys(user)
    context.driver.find_element(By.NAME, "password").send_keys(pwd)

@given(u'the personal page is shown')
@then(u'the personal page is shown')
def step_impl(context):
    status = context.driver.find_element(
        By.CLASS_NAME, "accountpic").is_displayed()

    assert status is True


@then(u'the button "Login" is unavailable')
def step_impl(context):
    try:
        status = context.driver.find_element(By.ID, "Login").is_displayed()
    except:
        status = False
    assert status is False

## ------------------------- Gabris scenario methods ------------------------- ##


# @given(u'that the personal page is shown')
# def step_impl(context):
#     context.driver = webdriver.Chrome("chromedriver.exe")
#     context.driver.get("http://localhost:3000/home")
#     status = context.driver.find_element(
#         By.CLASS_NAME, "accountpic").is_displayed()

#     assert status is True


@when(u'I select house type "{id}"')
def step_impl(context, id):
    context.driver.find_element(By.ID, id).click()


@when(u'I select room number preference "3 rooms"')
def step_impl(context):
    context.driver.find_element(By.ID, "3_rooms").click()


@then(u'I am shown filtered results')
def step_impl(context):
    status = context.driver.find_element(
        By.ID, "3room_apartament").is_displayed()

    assert status is True

## ------------------------- Gabris scenario methods 2 ------------------------- ##


@given(u'that filtered results are shown')
def step_impl(context):
    status = context.driver.find_element(
        By.XPATH, "//*[@id='3room_apartament']").is_displayed()

    assert status is True


@when(u'I click "Property 1"')
def step_impl(context):
    context.driver.find_element(
        By.XPATH, "//*[@id='3room_apartament']").click()


@when(u'I click the chat icon')
def step_impl(context):
    context.driver.find_element(By.CLASS_NAME, "rcw-launcher").click()


@when(u'I type in a message "{message}"')
def step_impl(context, message):
    context.driver.find_element(By.CLASS_NAME, "rcw-input").send_keys(message)


@when(u'click the "send message" button')
def step_impl(context):
    context.driver.find_element(By.CLASS_NAME, "rcw-send").click()

@then(u'a message is sent')
def step_impl(context):
    status = context.driver.find_element(
        By.CLASS_NAME, "rcw-message-text").is_displayed()

    assert status is True
    
