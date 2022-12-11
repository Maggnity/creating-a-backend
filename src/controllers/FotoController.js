import multerConfig from '../config/multerConfig';
import multer from 'multer'


const upload = multer(multerConfig).single('foto');


class FotoController{
	async store(req, res) {
		return upload(req, res, (err)=> {
			if(err) {
				return res.status(400).json({
					errors: [err.code]
				})
			}
			return res.json([req.file])
		})
	}
}

export default new FotoController();