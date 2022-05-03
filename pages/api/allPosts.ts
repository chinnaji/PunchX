// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { AllPosts } from '../../interfaces'

type Data = AllPosts

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  async function gg() {
    const data = await fetch(
      'https://punchng.com/wp-json/wp/v2/posts?per_page=20'
    )
    const posts = await data.json()

    res.status(200).json(posts)

    // console.log(b)
  }
  gg()
}
// import type { NextApiRequest, NextApiResponse } from 'next'

// type Data = {
//   name: string
// }

// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//   async function gg() {
//     const data = await fetch(
//       'https://punchng.com/wp-json/wp/v2/posts?per_page=20'
//     )
//     const posts = await data.json()

//     res.status(200).json(posts)

//     // console.log(b)
//   }
//   gg()

//   // res.status(200).json({ name: 'John Doe' })
// }
