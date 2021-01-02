// main.js
const update = document.querySelector('#update-button')
const deleteButton = document.querySelector('#delete-button')
const messageDiv = document.querySelector("#message")
const textname = document.getElementsByName('name_update')[0]
const textquote = document.getElementsByName('quote_update')[0]
const textid = document.getElementsByName('id_update')[0]
const textiddelete = document.getElementsByName('id_delete')[0]



update.addEventListener('click', _ => {
    alert(textid.value);
    fetch('/quotes', {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: textid.value,
        name: textname.value,
        quote: textquote.value
      })
    }).then(res => {
        if (res.ok) return res.json()
      })
      .then(response => {
        window.location.reload(true)
      })
  })

  deleteButton.addEventListener('click', _ => {
    fetch('/quotes', {
        method: 'delete',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: textiddelete.value
        })
      })
        .then(res => {
            if (res.ok) return res.json()
        }).then(data => {
            if (data === 'No quote to delete') {
            messageDiv.textContent = 'No Parameter to Delete'
            } else {
              window.location.reload(true)
            }
          }).catch(error => console.error(error))

    })