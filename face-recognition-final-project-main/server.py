import pymongo
import certifi
import datetime
from dotenv import load_dotenv
import os

load_dotenv()
name = os.environ.get('NAME')
password = os.environ.get('PASSWORD')


client = pymongo.MongoClient(
    f'mongodb://iHaveEyes:{password}@cluster0-shard-00-00.tobyl.mongodb.net:27017,cluster0-shard-00-01.tobyl.mongodb.net:27017,cluster0-shard-00-02.tobyl.mongodb.net:27017/{name}?ssl=true&replicaSet=atlas-x2w3z3-shard-0&authSource=admin&retryWrites=true&w=majority', tlsCAFile=certifi.where())


app = client.app
today = datetime.datetime.today()
oneday = datetime.timedelta(days=1)
yesterday = today - oneday

yesterday = yesterday.strftime('%d/%m/%Y')


def get_students_list(students):
    record = app.dailyattendances.find_one(
        {"day": today.strftime('%d/%m/%Y')})
    if(record):
        pass
    else:
        newObj = app.dailyattendances.insert_one(
            {"day": today.strftime('%d/%m/%Y')})
        newObj = newObj.inserted_id
        obj = app.dailyattendances.find_one({'_id': newObj})
        for student in students:
            if(app.dailyattendances.find_one({'students': {'name': student}})):
                pass
            else:
                app.dailyattendances.update_one(
                    obj, {'$push': {
                        'students': {
                            'name': student, 'arrive': False
                        },
                    }}
                )


# The function updates in the database that the child came to school

def student_arrived(student):
    record = app.dailyattendances.find_one(
        {"day": today.strftime('%d/%m/%Y')})
    if(record):
        for rec in record['students']:
            if(rec['name'] == student and rec['arrive'] == False):

                app.dailyattendances.update_one(
                    {
                        '_id': record['_id'], "students.name": student
                    },
                    {
                        '$push': {
                            "students.$.time": datetime.datetime.today().strftime("%H:%M")
                        },
                        '$set': {
                            "students.$.arrive": True
                        }
                    },
                )
