from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
import time
import random 
import os,sys, stat,json
import subprocess
from utilities import *
from selenium.webdriver.firefox.firefox_binary import FirefoxBinary
from webdriver_manager.firefox import GeckoDriverManager


# from xvfbwrapper import Xvfb
# print(subprocess.Popen("yum install wget",shell=True,stdout=subprocess.PIPE).communicate()[0])
# print(subprocess.Popen("wget http://mirror.centos.org/centos/7/updates/x86_64/Packages/firefox-102.6.0-1.el7.centos.i686.rpm",shell=True,stdout=subprocess.PIPE).communicate()[0])
# print(subprocess.Popen("yum localinstall firefox-102.6.0-1.el7.centos.i686.rpm",shell=True,stdout=subprocess.PIPE).communicate()[0])
# print(subprocess.Popen("yum -y install xorg-x11-server-Xvfb",shell=True,stdout=subprocess.PIPE).communicate()[0])
# print(subprocess.Popen("whereis firefox",shell=True,stdout=subprocess.PIPE).communicate()[0])
# print(subprocess.Popen("whereis xvfb",shell=True,stdout=subprocess.PIPE).communicate()[0])
# print(subprocess.Popen("which firefox",shell=True,stdout=subprocess.PIPE).communicate()[0])
# vdisplay = Xvfb()
# vdisplay.start()
# chrome_path=r"/usr/bin/firefox"
# os.environ['CHROME_PATH']=chrome_path
# binary_path=os.environ.get('CHROME_PATH')

path=r"chrome/geckodriver"



try:
    # binary = FirefoxBinary(chrome_path)
    driver = webdriver.Firefox(executable_path=GeckoDriverManager().install())#,firefox_binary=binary
    path = r"chrome/viewgrip.xpi"
    driver.install_addon(r"chrome/urbanvpn.xpi", temporary=True)
    driver.install_addon(path, temporary=True)
    driver.profile = webdriver.FirefoxProfile()
    driver.profile.add_extension(path)
    driver.profile.add_extension(extension=r"chrome/urbanvpn.xpi")
    driver.profile["extensions.firebug.allPagesActivation"] = True

except Exception as e:
    print("error",e)



driver.get("https://www.youtube.com")
time.sleep(3)


try:

    c3_eles= driver.execute_script("return document.getElementsByClassName('c3-material-button-button')")
    print("c3 eles",len(c3_eles))
    if len(c3_eles)>0:
        for i in range(0,len(c3_eles)):
            if 'Accept' in driver.execute_script("return document.getElementsByClassName('c3-material-button-button')["+str(i)+"].textContent"):
                time.sleep(5)
                driver.execute_script("return document.getElementsByClassName('c3-material-button-button')["+str(i)+"].click()")
                print("c3 click")
            else:
                print("c3 change",driver.execute_script("return document.getElementsByClassName('c3-material-button-button')["+str(i)+"].textContent"))
    else:
        print("No c3 buttons")
except Exception as e:
    print("c3 error",e)
    pass



# video_url,channel_url=get_random_video()

driver.get("https://www.youtube.com")
time.sleep(3)


# print(json.dumps(driver.get_cookies()))
set_driver_cookies(driver)
driver.refresh()


turn_on_vpn(driver)
time.sleep(5)


driver.get("https://www.viewgrip.net/")
time.sleep(5)

print(json.dumps(driver.get_cookies()))


time.sleep(30)


set_view_grip_cookies(driver)
# driver.refresh()
time.sleep(5)


driver.get("https://www.viewgrip.net/worker_session.php")
time.sleep(2)

# set_view_bot_cookies(driver)
# driver.refresh()
# time.sleep(2)

print("loading")
try:    
    btns=driver.execute_script("return document.querySelectorAll('a[onclick]')")
    
    if len(btns)>0:
        for i in range(0,len(btns)):
            if 'RUN' in driver.execute_script("return document.querySelectorAll('a[onclick]')["+str(i)+"].textContent"):
                driver.execute_script("return document.querySelectorAll('a[onclick]')["+str(i)+"].click()")
                print("clicked run")
    else:
        print('no buttons')
except:
    print("run button error")

time.sleep(5)

primmary_window=driver.window_handles[0]

if len(driver.window_handles)>1:

    window_after = driver.window_handles[1]
    driver.switch_to.window(window_after)
    try:
        try:
            document.querySelector("input[name='delete']").click()
        except:
            pass
        try:
            print("before1")
            time.sleep(5)
            driver.execute_script("""return document.querySelectorAll("button[type='submit']")[0].click()""")
            time.sleep(5)
        except:
            print("no need to activate worker")
            pass

        print("before2")
        driver.save_screenshot("viewgrip.png")
        upload_basic("viewgrip.png",'13ALQG3rJgrQXZxivxKZ_xXED-nInKsnM')

        driver.execute_script("""document.querySelectorAll("span[onclick='javascript:StartWorker();']")[0].click()""")
        time.sleep(18)
        driver.switch_to.window(window_after)
        driver.set_window_size(403,686)
        time.sleep(2)
        driver.save_screenshot("viewgrip.png")
        upload_basic("viewgrip.png",'13ALQG3rJgrQXZxivxKZ_xXED-nInKsnM')
        if len(driver.window_handles)>2:
            driver.switch_to.window(driver.window_handles[-1])
            time.sleep(13)
            print("!!!!!111")
            # driver.save_screenshot("viewgrip.png")
            # upload_basic("viewgrip.png",'13ALQG3rJgrQXZxivxKZ_xXED-nInKsnM')
            time.sleep(13) #1300
        else:
            driver.switch_to.window(window_after)
            driver.set_window_size(403,686)
            driver.execute_script("""document.querySelectorAll("span[onclick='javascript:StartWorker();']")[0].click()""")
            time.sleep(13)
            print("::::::2222")
            # driver.save_screenshot("viewgrip.png")
            # upload_basic("viewgrip.png",'13ALQG3rJgrQXZxivxKZ_xXED-nInKsnM')
            time.sleep(18) #180
            if len(driver.window_handles)>2:
                time.sleep(13) # 1300


        driver.switch_to.window(window_after)
        driver.execute_script("""document.querySelectorAll("span[onclick='javascript:StartWorker();']")[0].click()""")
        time.sleep(5)
        driver.execute_script("""return document.querySelectorAll("a[onclick='clear_session();']")[0].click()""")
    except Exception as e:
        print(e)
        pass

driver.quit()
vdisplay.stop()
