const lesson = {
  titleKo: 'VBA 기초 프로그래밍',
  titleEn: 'VBA Basic Programming',
  contentKo: `# VBA 기초 프로그래밍

## VBA 편집기 열기
Alt + F11로 VBA 편집기(VBE)를 열고, 모듈을 삽입하여 코드를 작성합니다.

\`\`\`vb
' 삽입 > 모듈 후 코드 작성
Sub 인사하기()
    MsgBox "안녕하세요, VBA입니다!"
End Sub
\`\`\`

## 변수 선언
\`Dim\` 키워드로 변수를 선언합니다. 주요 데이터 타입:

\`\`\`vb
Dim 이름 As String
Dim 나이 As Integer
Dim 급여 As Double
Dim 활성 As Boolean

이름 = "홍길동"
나이 = 30
\`\`\`

## 조건문 (If / Select Case)

\`\`\`vb
If score >= 90 Then
    grade = "A"
ElseIf score >= 80 Then
    grade = "B"
Else
    grade = "C"
End If

Select Case department
    Case "영업": bonus = 500
    Case "개발": bonus = 600
    Case Else: bonus = 300
End Select
\`\`\`

## 반복문 (For / Do While)

\`\`\`vb
' 1~10행에 번호 입력
For i = 1 To 10
    Cells(i, 1).Value = i
Next i

' 빈 셀을 만날 때까지 반복
Do While Cells(row, 1).Value <> ""
    row = row + 1
Loop
\`\`\`

## MsgBox / InputBox

\`\`\`vb
result = MsgBox("저장할까요?", vbYesNo + vbQuestion)
name = InputBox("이름을 입력하세요:")
\`\`\`

## Range 객체
셀을 읽고 쓰는 핵심 객체입니다.

\`\`\`vb
Range("A1").Value = "제목"
Range("A1:D10").ClearContents
Cells(2, 3).Value = 100    ' C2 셀
\`\`\`

> **실무 팁**: 코드 상단에 \`Option Explicit\`을 추가하면 변수 선언을 강제하여 오타 버그를 예방합니다.`,
  contentEn: `# VBA Basic Programming

## Opening the VBA Editor
Press Alt + F11 to open the VBA Editor (VBE), then insert a module to write code.

\`\`\`vb
' Insert > Module, then write code
Sub SayHello()
    MsgBox "Hello, VBA!"
End Sub
\`\`\`

## Declaring Variables
Use the \`Dim\` keyword. Common data types:

\`\`\`vb
Dim userName As String
Dim age As Integer
Dim salary As Double
Dim isActive As Boolean

userName = "John"
age = 30
\`\`\`

## Conditionals (If / Select Case)

\`\`\`vb
If score >= 90 Then
    grade = "A"
ElseIf score >= 80 Then
    grade = "B"
Else
    grade = "C"
End If

Select Case department
    Case "Sales": bonus = 500
    Case "Dev": bonus = 600
    Case Else: bonus = 300
End Select
\`\`\`

## Loops (For / Do While)

\`\`\`vb
' Write numbers 1-10 in column A
For i = 1 To 10
    Cells(i, 1).Value = i
Next i

' Loop until an empty cell is found
Do While Cells(row, 1).Value <> ""
    row = row + 1
Loop
\`\`\`

## MsgBox / InputBox

\`\`\`vb
result = MsgBox("Save changes?", vbYesNo + vbQuestion)
name = InputBox("Enter your name:")
\`\`\`

## Range Object
The core object for reading and writing cell data.

\`\`\`vb
Range("A1").Value = "Title"
Range("A1:D10").ClearContents
Cells(2, 3).Value = 100    ' Cell C2
\`\`\`

> **Pro Tip**: Add \`Option Explicit\` at the top of every module to enforce variable declaration and catch typos.`,
};

export default lesson;
