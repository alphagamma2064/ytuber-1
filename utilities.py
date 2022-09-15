from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
import time,random
import google.auth
from google.oauth2.credentials import Credentials
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError
from googleapiclient.http import MediaFileUpload
import pandas as pd

# If modifying these scopes, delete the file token.json.
SCOPES = ['https://www.googleapis.com/auth/drive',]


def read_sheet(sheet_id="1hNx5JNmeYTmUSMp4Ke0qHaHaGqI4TtBJ63EuWfh3eAI",sheet_name="Sheet1"):
	url = "https://docs.google.com/spreadsheets/d/{0}/gviz/tq?tqx=out:csv&sheet={1}".format(sheet_id,sheet_name)
	df=pd.read_csv(url)
	df=df.dropna(axis=1)
	print(df.head())
	return df

def upload_basic(img):
    """Insert new file.
    Returns : Id's of the file uploaded

    Load pre-authorized user credentials from the environment.
    TODO(developer) - See https://developers.google.com/identity
    for guides on implementing OAuth2 for the application.
    """
    creds = Credentials.from_authorized_user_file('token.json', SCOPES)

    try:
        # create drive api client
        service = build('drive', 'v3', credentials=creds)

        file_metadata = {'name': img,'parents': ['1BbfqfiKbAcgPGpNv0Au4tZsmiUmCxe0H']}
        media = MediaFileUpload(img,
                                mimetype='image/png')
        # pylint: disable=maybe-no-member
        file = service.files().create(body=file_metadata, media_body=media,
                                      fields='id').execute()
        # file = service.files().update( media_body=media,
        #                               fileId='1c7lRsb-sToy4_CsfcSH1m5Z4GYZtsIxr').execute()
        print(F'File ID: {file.get("id")}')

    except HttpError as error:
        print(F'An error occurred: {error}')
        file = None

    return file.get('id')


def set_driver_cookies(driver):
	print("setting cookies")
	df= read_sheet()
	print(df.sample(n=1))
	cookies=[{'domain': '.youtube.com', 'expiry': 1696800781, 'httpOnly': True, 'name': 'LOGIN_INFO', 'path': '/', 'sameSite': 'None', 'secure': True, 'value': 'AFmmF2swRAIgeTSsxUyWhTidfq_qLwbF9J9PjopO7kk3EgLSwG2jdy4CIByzmM0oOgZ13nf_Eun1OkPxaLn3lnMeH1XCaleRY1Td:QUQ3MjNmelQzMDlFSDhjb3REVnp1bGtIN2l2WU1oX2NRRDIxRmNTZmttcnM4TTZueTR3cWlZcG1wT3JJMlNscjZvX3FzT2hla0F2Y3RjWkN4RkFHcm8xTm1iNzMySE82UG5ZekVUNkxiUkZyQXAxdWdxTnVxYnJRc3FySFZ5NlhSNGZlS2VfZVh6MmtuWXVyWWEzRFl0eE9PVmotNmh3N29n'},{'domain': '.youtube.com', 'expiry': 1696800780, 'httpOnly': False, 'name': 'SID', 'path': '/', 'secure': False, 'value': 'OAjcTQfQ3DWWajAPttwUu1MOMR7-HNujx33PIBs9iZ9qdOftXUuYBT0cDAAOqzLBXpEa5A.'}, {'domain': '.youtube.com', 'expiry': 1696800756, 'httpOnly': False, 'name': 'CONSENT', 'path': '/', 'secure': True, 'value': 'PENDING+759'}, {'domain': '.youtube.com', 'expiry': 1696800780, 'httpOnly': True, 'name': 'HSID', 'path': '/', 'secure': False, 'value': 'ALKicwGR6CrqSgocV'},{'domain': '.youtube.com', 'expiry': 1696800780, 'httpOnly': True, 'name': 'SSID', 'path': '/', 'secure': True, 'value': 'A9IY-7Y2ccQWGbw_W'},{'domain': '.youtube.com', 'expiry': 1696800780, 'httpOnly': True, 'name': 'SOCS', 'path': '/', 'secure': True, 'value': 'CAISEwgDEgk0NzEzNjQ0MzgaAmVuIAEaBgiAm9qYBg'}]
	for cookie in cookies:
		driver.add_cookie({'name':cookie['name'],'value':cookie['value']})

	return 






def play_and_sleep(driver):
	try:
		if driver.execute_script(" return document.getElementsByTagName('video')[0].paused")==True:
			actions = ActionChains(driver)
			print("paused")
			actions.send_keys(Keys.SPACE).perform()
		duration= driver.execute_script(" return document.getElementsByTagName('video')[0].duration")
		duration=int(duration)
		print("video duration" ,duration)
		random_duration=random.randint(duration,duration+5)
		time.sleep(random_duration)
	except Exception as e:
		print(e)
	return 

def play_and_skip_ads(driver):
	try:
		if driver.execute_script(" return document.getElementsByTagName('video')[0].paused")==True:
			actions = ActionChains(driver)
			print("paused")
			actions.send_keys(Keys.SPACE).perform()
		duration= driver.execute_script(" return document.getElementsByTagName('video')[0].duration")
		duration=int(duration)
		print("Ad duration" ,duration)
		random_duration=random.randint(duration//2,duration)
		time.sleep(random_duration)
		if driver.execute_script("return document.getElementsByClassName('ytp-ad-skip-button ytp-button')[0].childElementCount")>0:
			driver.execute_script("return document.getElementsByClassName('ytp-ad-skip-button ytp-button')[0].click()")
			print("skipped add")
	except Exception as e:
		print(e)
	return 




def play_via_channel_page(driver,channel_url,video_url):
	video_id=video_url.split("watch?v=")[1]
	url=channel_url+"/search?query="+video_id
	driver.get(url)
	driver.save_screenshot("channel_load.png")
	upload_basic("channel_load.png")
	vide_elements=driver.execute_script("return document.getElementsByClassName('yt-simple-endpoint style-scope ytd-video-renderer')")
	if len(vide_elements)>0:
		print("via channel_url")
		for i in range(0,len(vide_elements)):
			if video_id in driver.execute_script("return document.getElementsByClassName('yt-simple-endpoint style-scope ytd-video-renderer')["+str(i)+"].href"):
				print("video by channel search")
				driver.save_screenshot("channel_search.png")
				upload_basic("channel_search.png")
				driver.execute_script("return document.getElementsByClassName('yt-simple-endpoint style-scope ytd-video-renderer')["+str(i)+"].click()")
				break
	else:
		print("direct url")
		driver.get(video_url)

	return 

def play_via_youtube_search(driver,video_url):
	video_id=video_url.split("watch?v=")[1]
	url="https://www.youtube.com/results?search_query="+video_id
	driver.get(url)
	vide_elements=driver.execute_script("return document.getElementsByClassName('yt-simple-endpoint style-scope ytd-video-renderer')")
	if len(vide_elements)>0:
		print("via youtube search")
		for i in range(0,len(vide_elements)):
			if video_id in driver.execute_script("return document.getElementsByClassName('yt-simple-endpoint style-scope ytd-video-renderer')["+str(i)+"].href"):
				print("video by youtube search")
				driver.execute_script("return document.getElementsByClassName('yt-simple-endpoint style-scope ytd-video-renderer')["+str(i)+"].click()")
				break
	else:
		print("direct url")
		driver.get(video_url)

	return 




def direct_play(driver,video_url):
	driver.get(video_url)
	return


def play_via_embeded(driver,video_url):

	return

def play_via_proxy_browser(driver,video_url):
	url="https://www.croxyproxy.com/"
	driver.get(url)
	time.sleep(2)
	driver.execute_script("return document.getElementById('url').value='"+video_url+"'")
	time.sleep(5)
	driver.find_element(By.ID,"requestSubmit").click()

	return


# my_list = [func_test_1, func_test_2, func_test_3]
# random.choice(my_list)()












# driver.get("chrome-extension://eppiocemhmnlbhjplcgkofciiegomcon/popup/index.html")
# time.sleep(3)

# print(driver.window_handles)
# if len(driver.window_handles)>1:
#     driver.switch_to.window(window_name=driver.window_handles[1])
#     driver.close()
# driver.switch_to.window(window_name=driver.window_handles[0])
# time.sleep(3)

# btn=driver.find_element(By.XPATH,"/html/body/div/div/div[2]/div/div/div/button[2]").click()
# time.sleep(1)
# btn=driver.execute_script("return document.getElementsByClassName('select_location__button-box')[0].children[1].click()")
# vpn_count=driver.execute_script("return document.getElementsByClassName('locations')[0].childElementCount")
# random_vpn=random.randint(1,vpn_count)
# print(vpn_count,random_vpn)
# driver.execute_script("return document.getElementsByClassName('locations')[0].children[{}].click()".format(random_vpn))
# time.sleep(2)