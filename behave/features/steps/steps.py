from behave import given, when, then
from selenium import webdriver
from selenium.webdriver.common.by import By

def before_all(context):
    print("BEFORE ALLL I RUNNEN")

    
@given(u'that BoligExpress Homepage is shown')
def step_impl(context):
    context.driver = webdriver.Chrome("chromedriver.exe")
    context.driver.get("http://localhost:3000/")

    status = context.driver.find_element(By.ID, "frontPageTitle").is_displayed()

    assert status is True


@when(u'I click the button "{id}"')
def step_impl(context, id):
    context.driver.find_element(By.ID, id).click()    


@when(u'I enter username "{user}" and password {pwd}')
def step_impl(context, user, pwd):
    context.driver.find_element(By.NAME, "first_name").send_keys(user)
    context.driver.find_element(By.NAME, "password").send_keys(pwd)


@then(u'the personal page i shown')
def step_impl(context):
    status = context.driver.find_element(By.CLASS_NAME, "accountpic").is_displayed()

    assert status is True


@then(u'the button "Login" is unavailable')
def step_impl(context):
    try: 
        status = context.driver.find_element(By.ID, "Login").is_displayed()
    except:
        status = False
    assert status is False