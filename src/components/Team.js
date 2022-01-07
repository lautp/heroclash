import React, {useContext} from 'react';
import HeroContext from '../context/hero/heroContext';

const Team = () => {
    const heroContext = useContext(HeroContext);

    const {getResults, getImages, addHero,  results, images, team} = heroContext

    

    return (
        <div className='container mt-5'>
            <div className="row">
            <table className='table'>
                <thead>
                    <tr>
                        <th scope='col'>ph</th>
                        <th scope='col'>Name</th>
                        <th scope='col'>Powerstats</th>
                        <th scope='col'></th>
                    </tr>
                </thead>
                <tbody>
                    {/* {
                        team.map(hero => (
                            <tr>
                                <th scope='row'>face</th>
                                <td>Batman</td>
                                <td>int str spd dur pow cmb</td>
                                <td>i -</td>
                            </tr>
                        ))
                    } */}
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default Team;


                    