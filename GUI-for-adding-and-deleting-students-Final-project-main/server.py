from dotenv import load_dotenv
import os
import pymongo
import certifi

load_dotenv()
name = os.environ.get('NAME')
password = os.environ.get('PASSWORD')

client = pymongo.MongoClient(
    f'mongodb://iHaveEyes:{password}@cluster0-shard-00-00.tobyl.mongodb.net:27017,cluster0-shard-00-01.tobyl.mongodb.net:27017,cluster0-shard-00-02.tobyl.mongodb.net:27017/{name}?ssl=true&replicaSet=atlas-x2w3z3-shard-0&authSource=admin&retryWrites=true&w=majority', tlsCAFile=certifi.where())

app = client.app


def add_new_students(name, phone):

    if(app.studentslists.estimated_document_count() == 0):
        newObj = app.studentslists.insert_one(
            {"students": [{'name': name, 'phone': phone}]})

    else:
        record = app.studentslists.find_one()

        if(app.studentslists.find_one(
                {'students.name': name})):
            return "התלמיד כבר רשום במערכת!"
        app.studentslists.update_one(
            {
                '_id': record['_id']
            },
            {
                '$push': {
                    "students": {'name': name, 'phone': phone}
                }
            },
        )

    return "התלמיד נוסף הבצלחה למערכת!"


def get_all_students_list():
    record = app.studentslists.find_one()
    students_list = []
    if(record):
        for rec in record['students']:
            students_list.append(rec['name'])
    students_list.sort()
    return students_list


def delete_students(students_list):
    record = app.studentslists.find_one()

    for student in students_list:

        app.studentslists.update_one(
            {
                '_id': record['_id'], "students.name": student
            },
            {
                '$pull': {
                    "students": {'name': student}
                },

            },
        )

    app.classrooms.update_many(
        {},
        {
            '$pull': {
                "student": {'$in': students_list}
            },

        },
    )
