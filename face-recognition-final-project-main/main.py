import cv2
import pickle
import server
import datetime

exec(open('face_train.py').read())

face_cascade = cv2.CascadeClassifier(
    'cascades/data/haarcascade_frontalface_alt2.xml')
eye_cascade = cv2.CascadeClassifier('cascades/data/haarcascade_eye.xml')
smile_cascade = cv2.CascadeClassifier('cascades/data/haarcascade_smile.xml')
recognizer = cv2.face.LBPHFaceRecognizer_create()
recognizer.read("trainner.yml")

labels = {}
with open("labels.pickle", 'rb') as f:
    og_labels = pickle.load(f)
    labels = {v: k for k, v in og_labels.items()}

# Update the list of students in the database.
server.get_students_list(labels.values())


# Turn on the camera
cap = cv2.VideoCapture(1)

while datetime.datetime.now().hour < 10:

    ret, frame = cap.read()
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    faces = face_cascade.detectMultiScale(
        gray, scaleFactor=1.5, minNeighbors=5)
    for (x, y, w, h) in faces:

        student_gray = gray[y:y+h, x:x+w]  # (ycord_start, ycord_end)
        student_color = frame[y:y+h, x:x+w]

        id_, conf = recognizer.predict(student_gray)
        if conf >= 4 and conf <= 85:

            font = cv2.FONT_HERSHEY_SIMPLEX
            name = labels[id_]
            color = (255, 255, 255)
            stroke = 2
            server.student_arrived(labels[id_])

        img_item = "7.png"
        cv2.imwrite(img_item, student_color)

        color = (255, 0, 0)
        stroke = 2
        end_cord_x = x + w
        end_cord_y = y + h
        cv2.rectangle(frame, (x, y), (end_cord_x, end_cord_y), color, stroke)

    cv2.imshow('I have eyes in my back', frame)

    if cv2.waitKey(20) & 0xFF == ord('q'):
        break

cap.release()
cv2.destroyAllWindows()
