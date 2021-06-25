// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { map } from 'rxjs/operators';


// export class SpotifyService {

//   constructor(private __albumData:HttpClient) { 
//     console.log("Spotify Service Ready")
//   }

//   getQuery( query:string , type: string ){
//     const url= `https://api.spotify.com/v1/${ query }`;

//     const headers  = new HttpHeaders({
//       'Authorization':'Bearer BQC5Rn93yWIBi9eagFdQEJ3XejIhIoPmSspNzJTujtmEVOG7ev3m9iRWWOHS8y8xIiJCU4k9v2CW2jy3LLw',
//       'Accept': 'application/json'
//     })

//      if ( type === "albumQuery"){
//        return this.__albumData.get(url, { headers });
//      } else if ( type === "artistQuery"){
//       const headers  = new HttpHeaders({
//         'Authorization':'Bearer BQC5Rn93yWIBi9eagFdQEJ3XejIhIoPmSspNzJTujtmEVOG7ev3m9iRWWOHS8y8xIiJCU4k9v2CW2jy3LLw',
//       })
//        return this.__albumData.get(url, { headers })
//      } else {
//        console.error(Error);
//      }
//   }

// // Brings Baekhyun's Albums only
//     getAlbums(){  
//       return this.getQuery(`artists/4ufh0WuMZh6y4Dmdnklvdl/albums`, 'albumQuery') 
//                   .pipe(map( data => data['items']));
//     }

// // Brings any artist on search component
//     getArtists( keyword: string){
//       return this.getQuery(`search?q=${ keyword }&type=artist&limit=15`, 'artistQuery')
//                   .pipe(map( data => data['artists'].items)); 
//   }

// //Brings back one artist when clicking on their card 
//   getArtist( id: string ){
//     return this.getQuery(`artists/${id}`, 'artistQuery')
//   }


// //Brings back an artist's top tracks given the artist's ID
//   getTopTracks ( id: string ){
//     return this.getQuery(`artists/${id}/top-tracks?country=us`, 'artistQuery')
//                 .pipe(map( data => data['tracks']));
//   }

// }
