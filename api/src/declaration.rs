use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Clone)]
pub struct ApiError {
    pub(crate) code: u16,
    pub(crate) message: String
}