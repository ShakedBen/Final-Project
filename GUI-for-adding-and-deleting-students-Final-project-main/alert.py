import PySimpleGUI as sg


def open_alert_window(valid, db_message):

    message = "הנתונים שהזנת אינם תקינים.\n שים לב:\n שם התלמיד לא יכול להכיל מספרים. \n מספר טלפון לא יכול להכיל אותיות."
    window_name = "שגיאה!"
    if(valid):
        message = db_message
        window_name = "הודעה"

    layout = [
        [sg.Text(message, font=("Arial, 12"), justification='center')],
        [sg.Button("אישור", key="Exit", size=(
            10, 1), pad=(0, 15))]
    ]

    window = sg.Window(window_name, layout, modal=True,
                       size=(250, 150), element_justification="c")
    while True:
        event, values = window.read()
        if event == "Exit" or event == sg.WIN_CLOSED:
            break

    window.close()
