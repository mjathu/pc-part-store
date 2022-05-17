import { Component } from "react";
import MenuItem from "../menu-item/menu-item.component";

import './directory.styles.scss';

export class Directory extends Component {

    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: 'case',
                    imageUrl: 'https://i.pinimg.com/originals/a5/c7/99/a5c7997ca72d6754c217b779f2a37dcd.jpg',
                    id: 1,
                    linkUrl: 'shop/case'
                },
                {
                    title: 'ram',
                    imageUrl: 'https://computerzilla.com/wp-content/uploads/2021/07/ram-upgrade-guide-1000x600.jpg',
                    id: 2,
                    linkUrl: 'shop/ram'
                },
                {
                    title: 'storage',
                    imageUrl: 'https://previews.123rf.com/images/svedoliver/svedoliver1602/svedoliver160200058/54311057-m2-high-speed-ssd-closeup-on-black-background.jpg',
                    id: 3,
                    linkUrl: 'shop/storage'
                },
                {
                    title: 'cpu',
                    imageUrl: 'https://c4.wallpaperflare.com/wallpaper/235/888/921/amd-processor-corn-ryazan-ryzen-hd-wallpaper-preview.jpg',
                    size: 'large',
                    id: 4,
                    linkUrl: 'shop/cpu'
                },
                {
                    title: 'gpu',
                    imageUrl: 'https://media.istockphoto.com/photos/video-card-with-fan-gaming-graphics-card-for-video-games-and-mining-picture-id1336070398?b=1&k=20&m=1336070398&s=170667a&w=0&h=mcQetK6TvAUYii2ypHhb2j1_vYAlpgyDAciSdzTIahk=',
                    size: 'large',
                    id: 5,
                    linkUrl: 'shop/gpu'
                }
            ]
        };

    }

    render() {

        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(({id, ...otherSectionProps}) => (

                        <MenuItem key={id} {...otherSectionProps}></MenuItem>
                        
                    ))
                }
            </div>
        );

    }

}