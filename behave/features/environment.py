import time
from behave import fixture
from selenium import webdriver


def before_feature(context, feature):
    context.driver = webdriver.Chrome("chromedriver.exe")
    time.sleep(2)
    
def before_step(context, scenario): 
    time.sleep(1)

def after_feature(context, feature): 
    pass

def before_scenario(context, scenario): 
    pass

def after_scenario(context, scenario): 
    pass


