import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { addMessage } from './MessageManager';

export const MessageForm = () => {
    const [article, setArticle] = useState({
		message: "",
	});
}