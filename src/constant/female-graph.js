
import graphContant from "src/constant/female-graph.json";

export const monthsFemale = []
export const min3sdFemale = []
export const min2sdFemale = []
export const min1sdFemale = []
export const nolsdFemale = []
export const plus1sdFemale = []
export const plus2sdFemale = []
export const plus3sdFemale = []

graphContant.forEach((item) => {
        monthsFemale.push(item.month)
        min3sdFemale.push(item.min3sd)
        min2sdFemale.push(item.min2sd)
        min1sdFemale.push(item.min1sd)
        nolsdFemale.push(item.nolsd)
        plus1sdFemale.push(item.plus1sd)
        plus2sdFemale.push(item.plus2sd)
        plus3sdFemale.push(item.plus3sd)
  })