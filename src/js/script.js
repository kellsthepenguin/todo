const crypto = require('crypto')

/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

window.onload = init

function init () {
  if (!isItemExists()) {
    /*
        Todo Example:
        {
          name: 'some name',
          description: 'some desc',
          date: 'YYYY-MM-DD',
          id: 'randomid'
        }
      */
    localStorage.setItem('data', '{ "todos": [], "canceled": [] }')
  }
}

/**
 * @returns {boolean} is item exists
*/
function isItemExists () {
  return localStorage.getItem('data') != null
}

/**
 * 
 * @param {string} name
 * @param {string} description
 * @param {string} date
 */
function addTodo (name, description, date) {
    const data = JSON.parse(localStorage.data)
    const obj = {
        name: name,
        description: description,
        date: date,
        id: crypto.randomBytes(16).toString('hex')
    }

    data.todos.concat(obj)

    localStorage.setItem('data', data)
}
