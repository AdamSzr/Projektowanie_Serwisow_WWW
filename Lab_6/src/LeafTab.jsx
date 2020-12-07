import React, { Component } from 'react'

// mogą to być np. tabele, listy ‘ol’ lub ‘ul’, obrazki itp.
// Dowolność wyboru, aby nie były to przykłady zbyt zbliżone do tych z repo
class LeafTab extends Component
{
    render(){
        return <table>
        <tr><td>Id</td><td>Imie</td><td>Nazwisko</td></tr>
        <tr><td>1</td><td>Zbigniew</td><td>Sosna</td></tr>
        <tr><td>2</td><td>Jan</td><td>Kowalski</td></tr>
    </table>
    }
}

export default LeafTab;