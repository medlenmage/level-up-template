import React from "react"
import { Route } from "react-router-dom"
import { GameProvider } from "./game/GameProvider"
import { GameList } from "./game/GameList"
import { EventProvider } from './event/EventProvider'
import { EventList } from './event/EventList'
import { GameForm } from './game/GameForm'
import { EventForm } from './event/EventForm'
import { ProfileProvider } from './auth/ProfileProvider'
import { Profile } from './auth/Profile'

export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            backgroundColor: "lightgoldenrodyellow"
        }}>
            <GameProvider>
                <Route exact path="/" render={ props => <GameList {...props}/>} />
                    
                <Route exact path="/games/new" render={props => <GameForm {...props} />} />

                <EventProvider>
                    <Route exact path="/events">
                        <EventList />
                    </Route>

                    <Route exact path="/events/new" render={props => <EventForm {...props} />} />
                </EventProvider>
            </GameProvider>
            <ProfileProvider>
                <Route exact path="/profile">
                    <Profile />
                </Route>
            </ProfileProvider>
        </main>
    </>
}
