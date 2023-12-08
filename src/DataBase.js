export function getDayData(date, userID, emotions, notes, tags){

    //check if the user has reported any emotions today
    //if yes, load it from the data base
    //otherwise, create a new day and send it to the database
    
    //проверка факта отмечания юзером каких-либо эмоций за сегодня
    //если да, то данные должны подцепиться с БД
    //иначе, должен быть создан новый день и данные должны быть отправлены на базу данных

    //for now, this function will load an object from the .json file in /dev/Day.json
    //in the future, it should pull data from mongoDB

    //на данное время, эта функция загрузит объект из .json файла в папке /dev/Day.json
    //в будущем, она должна тянуть данные с mongoDB

    fetch('./Day.json')
    .then(response => response.json())
    .then(data => {
        emotions = data.emotions;
        notes = data.notes;
        tags = data.tags;

        console.log(emotions);
        console.log(notes);
        console.log(tags);
    })    
    .catch(error => console.error('Error fetching JSON:', error));

}