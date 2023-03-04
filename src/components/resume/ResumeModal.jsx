import { Modal } from "@mui/material"

export default function ResumeModal ({open,close}){
    return(<Modal
        open={open}
        onClose={()=>close(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
            <div className="model__container"></div>

        </Modal>)
}