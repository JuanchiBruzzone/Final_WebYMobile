import { Activity } from '../types'
import activityData from './activityData.json'

const activities: Activity[] = activityData as Activity[]

export const addActivity = (titleActivity: string, descriptionActivity: string, imageActivity: string): boolean => {
  const newActivity: Activity = {
    id: undefined,
    title: titleActivity,
    description: descriptionActivity,
    image: imageActivity
  }
  activities.push(newActivity)
  return true
}

export const getActivities = (): Activity[] => activities

export const getActivity = (id: string): Activity | undefined => activities.find((activity) => activity.id === id)

export const updateActivity = (id: string, title: string, description: string, image: string): boolean => {
  const activity = getActivity(id)
  if (activity != null) {
    activity.title = title
    activity.description = description
    activity.image = image
    return true
  } else {
    return false
  }
}

export const deleteActivity = (id: string): boolean => {
  const activity = getActivity(id)
  if (activity != null) {
    activities.splice(activities.indexOf(activity), 1)
    return true
  } else {
    return false
  }
}
