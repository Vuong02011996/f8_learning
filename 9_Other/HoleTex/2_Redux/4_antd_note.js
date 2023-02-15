// Select

const handleChangePriority = ({ value }) => {
    // ở đây dùng Select của antd nên giá trị value trả về là object: {value: 'High'}
    // Cái value này lấy từ value của Select.Option
    setPriority(value);
};

<Select defaultValue="Medium" value={prioriry} onChange={handleChangePriority}>
    <Select.Option value="High" label="High">
        <Tag color="red">High</Tag>
    </Select.Option>
    <Select.Option value="Medium" label="Medium">
        <Tag color="blue">Medium</Tag>
    </Select.Option>
    <Select.Option value="Low" label="Low">
        <Tag color="gray">Low</Tag>
    </Select.Option>
</Select>;
