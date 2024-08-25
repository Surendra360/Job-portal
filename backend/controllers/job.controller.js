import { Job } from "../models/job.model.js";


// post jon by admin
export const postJob = async (req, res) => {
  try {
    const {
      title,
      description,
      requirements,
      salary,
      experience,
      location,
      jobType,
      position,
      companyId,
    } = req.body;
    const userId = req.id;
    if (
      !title ||
      !description ||
      !requirements ||
      !salary ||
      !experience ||
      !location ||
      !jobType ||
      !position ||
      !companyId
    ) {
      return res.status(400).json({
        message: "Please fill in all fields",
        success: false,
      });
    }
    const job = await Job.create({
        title,
        description,
        requirements: requirements.split(","),
        salary: Number(salary),
        location,
        jobType,
        experienceLevel:experience,
        position,
        company:companyId,
        created_by:userId
    })
    return res.status(201).json({
        message:"New job created successfully",
        job,
        success:true
    })
  } catch (error) {
    console.log(error);
  }
};

//student
export const getAllJob = async(req,res)=>{
    try {
        const keyword = req.query.keyword || ""
        const query = {
            $or: [
                {title:{$regex:keyword, $options:"i"}},
                {description:{$regex:keyword, $options:"i"}},
            ]
        };
        const jobs = await Job.find(query).populate({
            path:"company"
        }).sort({createdAt:-1});
        if(!jobs){
            return res.status(404).json({
                message: "No jobs found",
                success: false
                })
        }

        return res.status(200).json({
            jobs,
            success:true
        })

    } catch (error) {
        console.log(error);
    }
}


//find job by id for students log in

export const getJobById = async(req,res)=>{
    try {
        const jobId = req.params.id;
        const job = await Job.findById(jobId)
        if(!job){
            return res.status(404).json({
                message: "No jobs found",
                success: false
                })
        }

        return res.status(200).json({
            job,
            success:true
        })

    } catch (error) {
        console.log(error);
    } 
}


// how many job crieted by admin

export const getAdminJobs = async(req,res)=>{
    try {
        const adminId = req.id;
        const jobs = await Job.find({created_by:adminId});
        if(!jobs){
            return res.status(400).json({
                message: "No jobs found",
                success: false
            })
        }
        
        return res.status(200).json({
            jobs,
            success:true
        })

    } catch (error) {
        console.log(error);
    }
}