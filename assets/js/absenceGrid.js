import { primaryColor, secondaryColor, terciaryColor, fourthColor } from './variables.js';

const students = [
    { "Name": "Anthony B." },
    { "Name": "Noah D." },
    { "Name": "Marco P." },
    { "Name": "Jacquie M" },
    { "Name": "Jean C." },
];

const periodes = [
    { Name: "", Id: 0 },
    { Name: "Absence injustifiée", Id: 1 },
    { Name: "Exclusion", Id: 2 },
    { Name: "Absence justifié", Id: 3 },
    { Name: "Absence j. hors délai", Id: 4 },
    { Name: "Congé accordé", Id: 5 },
    { Name: "Arrivée tardive", Id: 6 },
    { Name: "Appui/Retenue", Id: 7 },
    { Name: "Rendez-vous/externe", Id: 8 },
    { Name: "Devoir non fait", Id: 9 },
];

$("#jsGrid").jsGrid({
    width: "80%",
    height: "auto",
    inserting: false,
    editing: true,
    sorting: true,
    paging: true,
    data: students,
    fields: [
        { name: "Name", type: "text", width: 150, editing: false, align: "center" },
        { name: "P1", type: "select", items: periodes, valueField: "Id", textField: "Name" },
        { name: "P2", type: "select", items: periodes, valueField: "Id", textField: "Name" },
        { name: "P3", type: "select", items: periodes, valueField: "Id", textField: "Name" },
        { name: "P4", type: "select", items: periodes, valueField: "Id", textField: "Name" },
        { name: "P5", type: "select", items: periodes, valueField: "Id", textField: "Name" },
        { type: 'control', deleteButton: false, }
    ],
});


$(".jsgrid-header-cell").each(function () {
    this.style.color = terciaryColor;
    this.style.backgroundColor = secondaryColor;
});


