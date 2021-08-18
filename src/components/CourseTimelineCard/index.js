// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'

import {
  CourseCardContainer,
  CourseTitle,
  DurationContainer,
  Duration,
  Description,
  CourseTagsContainer,
  CourseTagItem,
  CourseTag,
} from './styledComponents'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, duration, tagsList} = courseDetails

  return (
    <>
      <CourseCardContainer>
        <CourseTitle>{courseTitle}</CourseTitle>
        <DurationContainer>
          <AiFillClockCircle color="#171f46" />
          <Duration>{duration}</Duration>
        </DurationContainer>
      </CourseCardContainer>
      <Description>{description}</Description>
      <CourseTagsContainer>
        {tagsList.map(eachTag => (
          <CourseTagItem key={eachTag.id}>
            <CourseTag>{eachTag.name}</CourseTag>
          </CourseTagItem>
        ))}
      </CourseTagsContainer>
    </>
  )
}

export default CourseTimelineCard
