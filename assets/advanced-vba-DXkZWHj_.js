const e={titleKo:"VBA 고급 자동화",titleEn:"Advanced VBA Automation",contentKo:`# VBA 고급 자동화

## UserForm (사용자 정의 폼)
직관적인 입력 화면을 만들어 사용자 경험을 향상시킵니다.

\`\`\`vb
' 삽입 > UserForm으로 생성
' 주요 컨트롤: TextBox, ComboBox, ListBox, CommandButton

Private Sub btnSubmit_Click()
    Dim ws As Worksheet
    Set ws = ThisWorkbook.Sheets("데이터")
    Dim nextRow As Long
    nextRow = ws.Cells(ws.Rows.Count, 1).End(xlUp).Row + 1
    ws.Cells(nextRow, 1).Value = txtName.Value
    ws.Cells(nextRow, 2).Value = cboTeam.Value
    MsgBox "등록 완료!"
End Sub
\`\`\`

## 오류 처리 (Error Handling)
프로그램이 예기치 않게 중단되는 것을 방지합니다.

\`\`\`vb
Sub 안전한작업()
    On Error GoTo ErrorHandler
    ' 작업 코드...
    Workbooks.Open "C:\\data\\report.xlsx"
    Exit Sub
ErrorHandler:
    MsgBox "오류 발생: " & Err.Description
    Resume Next    ' 다음 줄부터 계속 실행
End Sub
\`\`\`

## 파일 입출력 (File I/O)
외부 텍스트 파일을 읽고 쓰는 방법입니다.

\`\`\`vb
' 파일 쓰기
Open "C:\\output\\log.txt" For Output As #1
Print #1, "작업 완료: " & Now()
Close #1

' 파일 읽기
Open "C:\\data\\list.csv" For Input As #1
Do Until EOF(1)
    Line Input #1, lineText
    Debug.Print lineText
Loop
Close #1
\`\`\`

## 외부 데이터 연동
다른 통합 문서나 데이터베이스와 연결합니다.

\`\`\`vb
' 다른 Excel 파일에서 데이터 가져오기
Dim srcWb As Workbook
Set srcWb = Workbooks.Open("C:\\data\\source.xlsx")
srcWb.Sheets(1).Range("A1:D100").Copy _
    ThisWorkbook.Sheets(1).Range("A1")
srcWb.Close SaveChanges:=False
\`\`\`

## 자동 실행 예약
특정 시점에 매크로를 자동으로 실행합니다.

\`\`\`vb
' 1시간마다 자동 실행
Sub 예약설정()
    Application.OnTime Now + TimeValue("01:00:00"), "자동저장"
End Sub

' 파일 열 때 자동 실행
Private Sub Workbook_Open()
    MsgBox "보고서 파일이 로드되었습니다."
    Call 데이터갱신
End Sub
\`\`\`

> **실무 팁**: 대량 데이터 처리 시 \`Application.ScreenUpdating = False\`로 화면 갱신을 멈추면 속도가 크게 향상됩니다.`,contentEn:`# Advanced VBA Automation

## UserForms
Build intuitive input interfaces for better user experience.

\`\`\`vb
' Insert > UserForm to create
' Key controls: TextBox, ComboBox, ListBox, CommandButton

Private Sub btnSubmit_Click()
    Dim ws As Worksheet
    Set ws = ThisWorkbook.Sheets("Data")
    Dim nextRow As Long
    nextRow = ws.Cells(ws.Rows.Count, 1).End(xlUp).Row + 1
    ws.Cells(nextRow, 1).Value = txtName.Value
    ws.Cells(nextRow, 2).Value = cboTeam.Value
    MsgBox "Record saved!"
End Sub
\`\`\`

## Error Handling
Prevent unexpected crashes and handle failures gracefully.

\`\`\`vb
Sub SafeOperation()
    On Error GoTo ErrorHandler
    ' Your code here...
    Workbooks.Open "C:\\data\\report.xlsx"
    Exit Sub
ErrorHandler:
    MsgBox "Error: " & Err.Description
    Resume Next    ' Continue from next line
End Sub
\`\`\`

## File I/O
Read from and write to external text files.

\`\`\`vb
' Write to file
Open "C:\\output\\log.txt" For Output As #1
Print #1, "Task complete: " & Now()
Close #1

' Read from file
Open "C:\\data\\list.csv" For Input As #1
Do Until EOF(1)
    Line Input #1, lineText
    Debug.Print lineText
Loop
Close #1
\`\`\`

## External Data Integration
Connect to other workbooks or databases.

\`\`\`vb
' Import data from another Excel file
Dim srcWb As Workbook
Set srcWb = Workbooks.Open("C:\\data\\source.xlsx")
srcWb.Sheets(1).Range("A1:D100").Copy _
    ThisWorkbook.Sheets(1).Range("A1")
srcWb.Close SaveChanges:=False
\`\`\`

## Scheduling Automation
Run macros automatically at specific times.

\`\`\`vb
' Auto-run every hour
Sub ScheduleTask()
    Application.OnTime Now + TimeValue("01:00:00"), "AutoSave"
End Sub

' Auto-run when file opens
Private Sub Workbook_Open()
    MsgBox "Report file loaded."
    Call RefreshData
End Sub
\`\`\`

> **Pro Tip**: Set \`Application.ScreenUpdating = False\` before processing large datasets to dramatically improve performance.`};export{e as default};
