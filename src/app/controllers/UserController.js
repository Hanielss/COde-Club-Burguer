
import { v4 } from 'uuid'
import * as Yup from 'yup'

import User from '../models/User'

class UserController {
    async store(request, response) {

        const schema = Yup.object().shape({
            name: Yup.string().required(),
            email: Yup.string().email().required(),
            password: Yup.string().required().min(6),
            admin: Yup.boolean(),
        })

        if (!(await schema.isValid(request.body))) {
            return response
                .status(400)
                .json({ error: "make sure your data is correct" })
        }



        const { name, email, password, admin } = request.body

        const userExists = await User.findOne({
            where: { email },
        })

        if (userExists) {
            return response.status(400).json({ error: 'User Already exists' })
        }

        console.log(userExists)


        const user = await User.create({

            id: v4(),
            name,
            email,
            password,
            admin,

        })

        return response.status(201).json({ id: user.id, name, email, admin })
    }
}
export default new UserController

