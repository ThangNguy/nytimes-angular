import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'newImage'
})

export class NewImage implements PipeTransform {
    transform(time: any) {
        var baseURL = 'https://static01.nyt.com/'
        var url =
        'images/2018/11/04/travel/04Hours-Singapore5/merlin_143821452_ed4b5ea3-b52c-496a-9a16-3c225ef111c0-articleLarge.jpg'
        if (time !== undefined && time.multimedia[0] !== undefined) {
            url = time.multimedia[0].url
          }
        return baseURL+url;
                
        };

}