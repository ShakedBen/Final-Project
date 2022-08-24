#!/usr/bin/env python
import PySimpleGUI as sg
import os
import server
import re
import alert
import shutil


def create_new_folder_for_new_student(name):
    newpath = r'/Users/judy/Desktop/תואר/פרוייקט גמר/face recognition/images/' + name
    if not os.path.exists(newpath):
        os.makedirs(newpath)


def remove_folder_of_student(name):
    for i in name:
        file_path = r'/Users/judy/Desktop/תואר/פרוייקט גמר/face recognition/images/' + i
        if os.path.exists(file_path):
            shutil.rmtree(file_path)


def check_correctly_data(name, phone):
    pattern = re.compile("^[\dA-Z]{3}-[\dA-Z]{7}$", re.IGNORECASE)
    valid_string = True
    if(name == ""):
        valid_string = False
    else:
        for character in name:
            if(character.isdigit()):
                valid_string = False
    return (pattern.match(phone) is not None) and valid_string


layout = [

    [sg.Text("שלום לך, הגעת למערכת ", key="title1",
             font=("Arial, 22"), justification="center")],
    [sg.Text("I have eyes in my back", key="title2",
             font=("Arial, 20"), justification="center")],
    [sg.Button("הוסף תלמיד", key="add_student_button",
               size=(25, 1.3), pad=(0, 15))],
    [sg.Button("מחק תלמיד", key="delete_student_button",
               size=(25, 1.3), pad=(0, 10))],



    [sg.Text("שם התלמיד:", key="student_name", visible=False,
             size=(200, 1), font=("Arial, 16"), justification="center"),
     sg.InputText(key='student_name_input', visible=False,
                  size=(25, 5), font=("Arial, 16"))],
    [sg.Text("מספר פלאפון של ההורה:", key="cell_phone", visible=False,
             size=(200, 1), font=("Arial, 16"), justification="center"),
     sg.InputText(key='cell_phone_input', visible=False,
                  size=(25, 5), font=("Arial, 16"))],
    [sg.Button("הוסף", key="confirmation_add_student", visible=False,
               size=(15, 1.2), pad=(0, 10))],
    [sg.Button("חזור", key="back_button_from_add_student", visible=False,
               size=(10, 1), pad=(0, 10))],



    [sg.Text("מחיקת תלמיד מהמערכת", key="delete_student", visible=False,
             size=(200, 1), font=("Arial, 22"), justification="center")],
    [sg.Listbox(values=server.get_all_students_list(), enable_events=True,
                key='student_list', visible=False, size=(45, 20))],
    [sg.Button("בחר", key="confirmation_delete_students", visible=False,
               size=(30, 1.3), pad=(0, 10))],
    [sg.Button("חזור", key="back_button_from_delete_student", visible=False,
               size=(10, 1), pad=(0, 10))],

]

# Create the window
window = sg.Window("I hava eyes in my back", layout, finalize=True,
                   size=(500, 500), element_justification="c", element_padding=(0, 2))


# Create an event loop
while True:

    event, values = window.read()
    # End program if user closes window or
    # presses the OK button

    if event == sg.WIN_CLOSED:
        break

    if event == "add_student_button":
        window['title1'].Update("הוספת תלמיד למערכת")
        window['title2'].Update(visible=False)
        window['add_student_button'].hide_row()
        window['delete_student_button'].hide_row()
        window['student_name'].Update(visible=True)
        window['student_name_input'].Update(visible=True)
        window['cell_phone'].Update(visible=True)
        window['cell_phone_input'].Update(visible=True)
        window['confirmation_add_student'].Update(visible=True)
        window['back_button_from_add_student'].Update(visible=True)

        # window['_FILEBROWSE_'].Update(visible=True)

        window['student_name'].unhide_row()
        window['student_name_input'].unhide_row()
        window['cell_phone'].unhide_row()
        window['cell_phone_input'].unhide_row()
        window['confirmation_add_student'].unhide_row()
        window['back_button_from_add_student'].unhide_row()

    if event == "delete_student_button":
        window['title1'].Update("מחיקת תלמיד מהמערכת")
        window['title2'].Update(visible=False)
        window['add_student_button'].hide_row()
        window['delete_student_button'].hide_row()
        window['student_list'].Update(visible=True)
        window['student_list'].unhide_row()
        window['student_list'].Update(server.get_all_students_list())
        window['back_button_from_delete_student'].Update(visible=True)
        window['confirmation_delete_students'].Update(visible=True)
        window['confirmation_delete_students'].unhide_row()

    if event == 'back_button_from_add_student':
        window['title1'].Update("שלום לך, הגעת למערכת ")
        window['title2'].Update(visible=True)
        window['add_student_button'].unhide_row()
        window['delete_student_button'].unhide_row()
        window['student_name'].hide_row()
        window['student_name_input'].hide_row()
        window['cell_phone'].hide_row()
        window['cell_phone_input'].hide_row()
        window['confirmation_add_student'].hide_row()
        window['back_button_from_add_student'].hide_row()

        window['student_name'].Update(visible=False)
        window['student_name_input'].Update(visible=False)
        window['cell_phone'].Update(visible=False)
        window['cell_phone_input'].Update(visible=False)
        window['confirmation_add_student'].Update(visible=False)
        window['back_button_from_add_student'].Update(visible=False)

    if event == 'back_button_from_delete_student':
        window['title1'].Update("שלום לך, הגעת למערכת ")
        window['title2'].Update(visible=True)
        window['add_student_button'].Update(visible=True)
        window['delete_student_button'].Update(visible=True)
        window['back_button_from_delete_student'].Update(visible=False)
        window['student_list'].Update(visible=False)
        window['student_list'].hide_row()
        window['add_student_button'].unhide_row()
        window['delete_student_button'].unhide_row()
        window['confirmation_delete_students'].Update(visible=False)
        window['confirmation_delete_students'].hide_row()

    if event == "confirmation_add_student":

        valid = check_correctly_data(
            values['student_name_input'], values["cell_phone_input"])

        if(valid):
            alert.open_alert_window(valid, server.add_new_students(
                values['student_name_input'], values["cell_phone_input"]))

            create_new_folder_for_new_student(
                values['student_name_input'])
        else:
            alert.open_alert_window(valid, "")

        window['student_name_input'].Update("")
        window['cell_phone_input'].Update("")

    if event == "confirmation_delete_students":
        server.delete_students(values['student_list'])
        remove_folder_of_student(values['student_list'])
        window['student_list'].Update(server.get_all_students_list())


window.close()
