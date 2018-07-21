bootstrap-kr은 twtr bootstrap 프레임워크 v4.1.2를 기반으로 한국형 웹사이트의 필요에 부합하도록 조정한 버전입니다.

## 기존 v4에서 달라진 점
원본인 v4.1.2에서 변경된 부분은 아래와 같이 요약할 수 있습니다.


### 중요한 변경
- IE 8-9에 호환됩니다. (bootstrap v3.3.7에 구현된 내용을 역이식했습니다.)
  - CSS flexbox layout을 사용하지 않습니다.
  - rem 단위를 사용하지 않습니다.
  - calc 함수는 fallback이 추가되었습니다.
- @media 쿼리 방식이 desktop 우선으로 변경되었습니다. (출력 코드가 다를 뿐 효과는 유사하므로 원래대로 사용하면 됩니다.)
  - 그리드 유틸리티를 xs, sm, md... 순서가 아닌 xl, lg, md... 순서로 변경했습니다.
- 커스터마이징의 난이도를 낮추기 위해, 모든 컴포넌트에서 기본값 border-radius, box-shadow, text-shadow, gradient를 제거했습니다. (예외: .dropdown)

### v3 구문을 따르는 부분
- .form-row 대신 .form.row를 사용합니다.
- .input-group-prepend, .input-group-append 대신 .input-group-addon을 사용합니다.
- .media

### 삭제된 부분
- .modal-dialog-centered

### 기타
- 한국어 시스템 폰트를 기본 폰트로 지정했습니다.
- 이탤릭체를 사용하지 않습니다. (address, em, i)
