import dinText from "./assets/menu2edit.png"
import brkText from "./assets/breakfast2.png"
import specialsText from "./assets/specials2.png"
import {main} from "./fetchData.js"

let [dinnerFront, dinnerBack, breakFront, breakBack, specialDays, contactInfo]=await main();

function getItems(){
    // creates the recurring elements found in each section of the menu
    const elements=(title, price, desc)=>{
        const name=document.createElement('h2');
        const cost=document.createElement('span');
        const info=document.createElement('p')

        name.innerHTML=title;
        cost.innerHTML=price;
        info.innerHTML=desc;

        cost.className='price';

        
        return [name, cost, info];
    }

    //Pushes all items passed from array of objects into containers for HTML page
    const pageInfo=(items)=>{
        let pageArr=[];
        for(let item of items){
            if(item.Header!=''){
                var container=document.createElement('div');
                container.className=item.Header.toLowerCase();
                let appTitle=document.createElement('h1');
                appTitle.textContent=item.Header;
                container.appendChild(appTitle)
                pageArr.push(container);
            }
            if(item.Item!=''||item.Price!=''){
                
                var [name, cost, info]=elements(item.Item, item.Price, item.Description);
                name.appendChild(cost);
                container.appendChild(name);
                container.appendChild(info);
                
            }
            if(item.Special!=''){
                
                container.innerHTML+=item.Special
            }
        }
        return pageArr;
    }
    
    return {pageInfo};
}

function alcohol(){
    const booze=document.createElement('div');
    const boozeMen=document.createElement('div');
    booze.className='beersImage';
    boozeMen.className='alcohol';
    boozeMen.id='alcohol';

    let beerList=["FATHEAD'S-HEAD HUNTER IPA", "TROEGS-PERPETUAL IPA", "ARSENAL-PUMPKIN CIDER", 
                  "GUINESS-STOUT", "SOUTHERN TIER-PUMKING", "MILLER LITE-LAGER", "YUENGLING LAGER",
                  "TROEG'S HOPRA IPA 12oz CANS", "BEER OF THE MONTH $4.5"];

    let drinkNames=['bloody mary', 'cappys cosmo', 'moscow mule', 
                    'john daly', 'dark and stormy', 'mangaria', 
                    'lavender taquini', 'big apple', 'elderflower fizz'];

    let drinkDesc=[
        "Tito's Vodka, secret house recipe, with or without horseradish, served with lemon",
        "Smirnoff Rasberry Vodka, Cointreau, Rose's Sweet Lime, dash of bitters, served in a copper mug",
        "Tito’s vodka, Jamaica’s Finest ginger beer (NA), Rose’s sweet lime, dash of bitters, served in a copper mug.",
        "Absolut Citron, lemonade, unsweetened iced tea, served in a tall glass.",
        "Meyer’s dark rum, Jamaica’s Finest ginger beer (NA), Rose’s sweet lime, served in a copper mug.",
        "Frontera Cabernet-Merlot blend, house vodka, triple sec, orange juice, grenadine, Rose’s sweet lime.",
        "Hornitos Plata tequila, St. Germain, Chambord, sours mix, served up.",
        "CROWN ROYAL APPLE, Sweet and Dry Vermouth, bitters, served up or on the rocks with a cinnamon stick",
        "Hendricks Gin, St. Germain, soda, fresh lemon."
    ];

    let drinkList=drinkNames.map((x, i)=>[x, drinkDesc[i]]);
    

    const beers=document.createElement('div');
    beers.className='beers';
    const headBeer=document.createElement('h1');
    headBeer.className='seasonal';
    headBeer.textContent='Seasonal Beer List';
    beers.appendChild(headBeer);

    for(let beer of beerList){
        const head=document.createElement('h2');
        const span=document.createElement('span');
        span.className='highlight';
        span.textContent=beer;
        head.appendChild(span);
        beers.appendChild(head);
    }

    const drinks=document.createElement('div');
    const cocktails=document.createElement('h1');
    cocktails.className='cocktails';
    cocktails.textContent=`Classic Cappys Cocktails`;
    drinks.className='drinks';
    drinks.appendChild(cocktails);

    for (let drink of drinkList){
        // classless container to contain all elements
        const cont=document.createElement('div');
        const title=document.createElement('h2');
        const titleP=document.createElement('span');
        const desc=document.createElement('p');

        title.textContent=drink[0];
        desc.textContent=drink[1];
        titleP.className='price';

        title.appendChild(titleP);
        cont.appendChild(title);
        cont.appendChild(desc);
        drinks.appendChild(cont);
    }

    boozeMen.appendChild(beers);
    boozeMen.appendChild(drinks);
    booze.appendChild(boozeMen);
    return booze;
}

function dinner(){
    
    const din=document.createElement('div');
    const dinImg=document.createElement('div');
    const img=document.createElement('img');
    const dinMen=document.createElement('div');

    din.className='dinner';
    dinImg.className='dinnerText';
    img.src=dinText;
    img.alt='Dinner Text';
    dinMen.className='dinnerMenu';

    // dinner menu pages
    const pageOne=document.createElement('div');
    const pageTwo=document.createElement('div');
    pageOne.className='dinner1';
    pageTwo.className='dinner2';

    // create all div elements for page one and page two of dinner menu
    const pageTwoCont=getItems().pageInfo(dinnerBack);
    const pageOneCont=getItems().pageInfo(dinnerFront);

    for(let container of pageOneCont){
        pageOne.appendChild(container);
    }
    for(let container of pageTwoCont){
        pageTwo.appendChild(container);
    }

    dinMen.appendChild(pageOne);
    dinMen.appendChild(pageTwo);
    dinImg.appendChild(img);
    din.appendChild(dinImg);
    din.appendChild(dinMen);

    return din;
}

function breakfast(){
    const breakFast=document.createElement('div');
    const container=document.createElement('div');
    const breakText=document.createElement('div');
    const image=document.createElement('img');

    // All containers for the header styling of breakfast menu
    breakFast.className='breakfast';
    container.className='container';
    breakText.className='breakfastText';
    image.src=brkText;
    image.alt='Breakfast text';

    breakText.appendChild(image);
    container.appendChild(breakText);

    // containers for the actual breakfast menu's
    const contWrap=document.createElement('div');
    const breakMenu=document.createElement('div');
    const pageOne=document.createElement('div');
    const pageTwo=document.createElement('div');

    contWrap.className='content-wrap';
    breakMenu.className='breakfastMenu';
    pageOne.className='breakfast1';
    pageTwo.className='breakfast2';

    const pageOneCont=getItems().pageInfo(breakFront);
    const pageTwoCont=getItems().pageInfo(breakBack);

    for(let cont of pageOneCont){
        pageOne.appendChild(cont);
    }
    breakMenu.appendChild(pageOne);
    
    for(let cont of pageTwoCont){
        pageTwo.appendChild(cont);
    }
    breakMenu.appendChild(pageTwo);

    contWrap.appendChild(breakMenu);
    container.appendChild(contWrap);
    breakFast.appendChild(container);

    return breakFast;
}

function events(){
    // events splash content
    const event=document.createElement('div');
    const container=document.createElement('div');
    const eventText=document.createElement('div');
    const image=document.createElement('img');
    
    event.className='events';
    container.className='container';
    eventText.className='eventBanner';
    image.src=specialsText;
    image.alt='events banner';

    eventText.appendChild(image);
    container.appendChild(eventText);
    
    // events description content
    const eventWrap=document.createElement('div');
    eventWrap.className='event-wrap';

    // Takes object passed and creates elements for inner daily container
    const specials=(item)=>{
        const day=document.createElement('span');
        const event=document.createElement('span');
        
        day.className='highlights';
        event.className='event_list';
        day.innerHTML=item.Day;
        event.innerHTML=item.Event;
        return [day, event];
    }

    for(let day of specialDays){
        
        const daily=document.createElement('div');
        daily.className='day';

        let [specialDay, specialEvent]=specials(day);
        daily.appendChild(specialDay);
        daily.appendChild(specialEvent);
        eventWrap.appendChild(daily)
    }
    container.appendChild(eventWrap)
    event.appendChild(container);
    return event;
}

import fb from "./assets/facebook.png";
import twitter from "./assets/twitter.png";
import insta from "./assets/instagram_logo.png";

function contact(){
    const footer=document.createElement('footer');
    const container=document.createElement('div');
    const footContent=document.createElement('div');
    
    footer.className='site-footer contact';
    container.className='container';
    footContent.className='footerContent';

    (()=>{
        const address=document.createElement('address');
        address.className='address';
        const socialMedia=document.createElement('div');
        socialMedia.className='socialMedia'

        // push all address and directional information to footer
        for(let item of contactInfo){
          if(item.textInfo==='412.621.1188'){
            let a=document.createElement('a');
            a.href=item.link;
            a.style='color:black;text-decoration:underline;';
            a.target='_blank'
            a.innerHTML=item.textInfo;
            address.appendChild(a);
            continue;
          }
          if(item.textInfo==='Directions'){
            let p=document.createElement('p');
            let a=document.createElement('a')
            a.appendChild(document.createElement('em')).appendChild(document.createElement('strong')).innerHTML=item.textInfo;
            a.href=item.link;
            a.className='direction';
            a.target='_blank';
            p.appendChild(a);
            address.appendChild(p);
            continue;
          }

          address.appendChild(document.createElement('p')).innerHTML=item.textInfo;  
        }

        // get all social media links
        let images=[fb, twitter, insta];
        let itter=0;
        for(let item of contactInfo){
            if(item.alt!==''){
                let a=document.createElement('a');
                a.target='_blank';
                a.href=item.link;

                let image=document.createElement('img');
                image.src=images[itter];
                image.width=50;
                image.height=50;
                image.alt=item.alt;
                
                a.appendChild(image);
                socialMedia.appendChild(a);
                itter+=1;
            }
        }

        // append to footer
        footContent.appendChild(address);
        footContent.appendChild(socialMedia);
    })(footContent);

    container.appendChild(footContent);
    footer.appendChild(container);
    return footer;
}


export {alcohol, dinner, breakfast, events, contact}