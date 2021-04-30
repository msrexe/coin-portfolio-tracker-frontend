import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { coinPairs } from '../models/coinPairs';
import coinPairs from 'src/assets/coinPairs.json';


@Injectable({
  providedIn: 'root'
})

export class BinanceServiceService {

  constructor(
    private httpclient:HttpClient
  ) {}

  coinPairsList:string[]=[]
  getCoinPairs(){
    coinPairs.forEach(element => {
      this.coinPairsList.push(element.symbol)
    });
    return this.coinPairsList
  }

  // async getCoins(){
  
  //   let symbols:coinPairs []=[]
  //   const api = "https://api3.binance.com/api/v3/exchangeInfo"
  //   let r:any = await fetch(api)
  //   r = await r.json()
  //   r.symbols.forEach((element:any, i:number) => {
  //     symbols.push({
  //       item_id:i,
  //       item_text:element.symbol
  //     })
  //   })
  //   return symbols
  // }
  
  

}
