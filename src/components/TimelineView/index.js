// Write your code here
import {Chrono} from 'react-chrono'

import ProjectTimelineCard from '../ProjectTimelineCard'
import CourseTimelineCard from '../CourseTimelineCard'

import {
  TimelineContainer,
  ResponsiveContainer,
  HeaderContainer,
  Heading,
  CCBPHeading,
} from './styledComponents'

const TimelineView = props => {
  const {timelineItemsList} = props

  const renderTimelineCard = item => {
    if (item.categoryId === 'COURSE') {
      return <CourseTimelineCard key={item.id} courseDetails={item} />
    }
    return <ProjectTimelineCard key={item.id} projectDetails={item} />
  }

  return (
    <TimelineContainer>
      <ResponsiveContainer>
        <HeaderContainer>
          <Heading>
            MY JOURNEY OF <br />
            <CCBPHeading>CCBP 4.0</CCBPHeading>
          </Heading>
        </HeaderContainer>
        <Chrono
          mode="VERTICAL_ALTERNATING"
          items={timelineItemsList}
          theme={{secondary: 'white'}}
          slideShow
        >
          {timelineItemsList.map(each => renderTimelineCard(each))}
        </Chrono>
      </ResponsiveContainer>
    </TimelineContainer>
  )
}

export default TimelineView
